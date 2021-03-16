//let awsPresignedForm = @json($awsPresignedForm)

//document.getElementById('uploadBtn').addEventListener('click', upload);

function upload(){



    const uploadForm = document.getElementById('uploadForm')

    const form = new FormData(uploadForm);

    inputs = awsPresignedForm['formInputs']

    for(let i in inputs){
        form.append(i, inputs[i])
    }

    let action = awsPresignedForm['formAttributes'].action
    let method = awsPresignedForm['formAttributes'].method
    let enctype = awsPresignedForm['formAttributes'].enctype

    const awsReq = fetch(action, {
        method: method,
        mode: 'no-cors',
        headers: {
            'Content-Type': enctype,
        },
        body: form,
    })



    /*$.ajax({
        url : 'pictures/create/pre-signed-url',
        type : 'POST', // Le type de la requête HTTP, ici devenu POST
        data : formInputs,
        dataType : 'html'
    });*/

}
