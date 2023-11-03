var arr = [];
var s_no = 1;
var tableData = "<table></table>";

let dataMain = () => {
    var data = document.getElementById("personalData").value;

    if (data) {
        arr.push(data);
        console.log(arr);
        document.getElementById("personalData").value = "";

        for (var i = 0; i < arr.length; i++) {
            tableData += "<tr><td>" + s_no + "</td><td>" + arr.splice(0) + "</td><td>Edit/Remove</td></tr>";
            s_no++;
        }

        document.getElementById("tableData").innerHTML = tableData;
    }
}
document.getElementById("buttonId").addEventListener("click", dataMain);
