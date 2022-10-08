let Arr = [];
$(document).ready(function () {


    $('#submit').on('click', function (e) {
        e.preventDefault();

        let flag = validateForm();
        let obj = {};

        if (flag) {
            $('form select').each(function () {
                // console.log($(this).attr('id'));

                let name = $(this).attr('name')
                let id = $(this).attr('id')
                let val = $(this).val();

                obj[name] = val;
            })
            console.log(obj);
            (obj.BuildingCode == null) ? obj.BuildingCode = "" : "";
            (obj.DrawingRevNo == null) ? obj.DrawingRevNo = "" : "";

            let isUnique;
            if (Arr.length == 0) { isUnique = true }
            else {
                isUnique = UniqueCheck(obj);
            }

            if (isUnique) {
                Arr.push(obj);

                console.log(Arr);

                Arr.map((data) => {
                    $("#myTable > tbody").append(`<tr><td>${data.ActionCode}</td>
                        <td>${data.ActionType}</td>
                        <td>${data.ProjectNo}</td>
                        <td>${data.BuildingCode}</td>
                        <td>${data.DrawingRevNo}</td>
                    </tr>`);

                });
            }
        }
    })




})

function UniqueCheck(obj) {
    for (let x of Arr) {
        if (x.ActionType == obj.ActionType && x.ActionCode == obj.ActionCode && x.ProjectNo == obj.ProjectNo && x.BuildingCode == obj.BuildingCode && x.DrawingRevNo == obj.DrawingRevNo) {
            let uniqueName = "";

            if (obj.DrawingRevNo != "") {
                uniqueName = "Drawing Rev No"
            }
            else if (obj.BuildingCode != "") {
                uniqueName = "BuildingCode"
            }
            else {
                uniqueName = "Project No"
            }
            ShowAlert(`<center>${uniqueName} should be unique</center>`);
            return false;
        }
    }
    $("#tbody").empty();
    return true;
}

function validateForm() {
    let x = document.forms["myForm"]["ActionType", "ActionCode", "ProjectNo"].value;
    if (x == "") {
        ShowAlert("<center>Please fill the mandatory fields!!!</center>");
        return false;
    }
    else {
        return true;
    }
}

function ShowAlert(msg) {
    $('#alert').html(msg)
    $("#alert").show('slow');
    setTimeout(() => { $("#alert").hide('slow'); }, 5000);
}