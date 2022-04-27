window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://getresumecounterfunctionapp.azurewebsites.net/api/GetResumeCounter?code=jp4rx3wuLEzaXvSFeBKaq08RGiVCwRtpAA1Cdxdc15c9ZGjM79tWjg=='; 
ghhggg
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
