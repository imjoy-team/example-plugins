var https = require('https');
var fs = require('fs');

var childProcess = require('child_process');

function runScript(scriptPath, callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        if(callback) callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        if(callback) callback(err);
    });

}


function downloadScripts(){
  return new Promise((resolve, reject)=>{
     https.get("https://raw.githubusercontent.com/oeway/ImJoy/master/web/src/pluginParser.js", (response)=>{
      if(response.statusCode == 200){
        var file = fs.createWriteStream( './pluginParser.js');
        response.on('data', (d) => {
          file.write(d.toString().replace('export function', 'function'));
        });
        response.on('end', () => {
          file.write('exports.parseComponent = parseComponent;')
          file.close(()=>{
            https.get("https://raw.githubusercontent.com/oeway/ImJoy/master/web/src/buildManifest.js", (response)=>{
              if(response.statusCode == 200){
                var file = fs.createWriteStream( './buildManifest.js');
                response.on('data', (d) => {
                  file.write(d.toString());
                });
                response.on('end', () => {
                  file.close(resolve);
                })
              }
              else{
                reject(response.statusCode)
              }

            }).on('error', function(err) { // Handle errors
              reject(err.message);
            });
          });
        })
      }
      else{
        reject(response.statusCode)
      }

    }).on('error', function(err) { // Handle errors
      reject(err.message);
    });
  })
}

downloadScripts().then(()=>{
   runScript('./buildManifest.js', ()=>{
     fs.unlink('./pluginParser.js', ()=>{})
     fs.unlink('./buildManifest.js', ()=>{})
   })

}).catch((err)=>{
  console.error(err)
  runScript('./buildManifest.js')
})
