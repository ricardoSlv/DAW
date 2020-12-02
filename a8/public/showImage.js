function showImage(name, type) {

    const fileObj = $(`
        <div class="w3-col s3">
        <label class="w3-text-teal">
            <b>Description</b>
        </label>
        </div>
        <div class="w3-col s9 w3-border">
            <input class="w3-input w3-border w3-light-grey" type="text" name="desc">
        </div>`
    )

    if(type==='image/png' || type==='image/jpeg')
        const ficheiro = $('<img src=/fileStore/' + name + ', ' + type + '</p>')
    else
        const ficheiro = $('<p>'+name+', '+type+'</p>')
    const download = $('<div><a href="/files/download/"'+name+'</div>')

    $('#display').empty()
    $('#display').append(ficheiro,download)
    $('#display').modal()
}