export const downloadAllFile = (data) => {
    console.log(data);
    
    data.forEach(d => {
        downloadOneFile(d);
    });
}

export const downloadOneFile = (data) => {
    const textEncoded = new TextEncoder().encode(data)
    const file = new Blob([textEncoded], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(file);
    const eTag = document.createElement('a');

    eTag.href = fileUrl;
    eTag.setAttribute('download', data.slice(0,5) + '.csv');
    document.body.appendChild(eTag);
    eTag.click();
    eTag.remove();
}