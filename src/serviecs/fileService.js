const path = require("path"); // fs : file system

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    // save => public/images/upload
    //remember to create the upload folder first
    let uploadPath = path.resolve(__dirname, "../public/image/upload");
    // console.log(">>> check fileObject: ", path.resolve(__dirname, "../public/images/upload"))

    // abc.png => abc-timestamp.png

    //get image extension
    let extName = path.extname(fileObject.name);

    //get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);

    //create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}`;

    console.log("final path: ", finalPath)

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (err) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/image/upload");

        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            console.log("check i = ", i)
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error)
    }

}


module.exports = {
    uploadSingleFile, uploadMultipleFiles
}