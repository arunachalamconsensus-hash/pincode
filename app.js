function searchPincode(){
    let pin = document.getElementById("pincode").value;
    let result = document.getElementById("result");

    if(pin.length != 6){
        result.innerHTML = "❌ Please enter valid 6 digit pincode";
        return;
    }

    axios.get("https://api.postalpincode.in/pincode/" + pin)
    .then(res => {
        let data = res.data;

        if(data[0].Status == "Success"){
            let post = data[0].PostOffice[0];

            result.innerHTML = `
            <b>Post Office:</b> ${post.Name}<br>
            <b>District:</b> ${post.District}<br>
            <b>State:</b> ${post.State}<br>
            <b>Country:</b> ${post.Country}
            `;
        } else {
            result.innerHTML = "❌ No details found!";
        }
    })
    .catch(() => {
        result.innerHTML = "⚠ Server Error!";
    });
}
