$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://test101.ustangelicum.edu.ph/api/student/get",
        statusCode: {
            200: function (response) {
                var studentTable = $(".studentTable");

                for (let i = 0; i < response.length; i++) {
                    studentTable.append(
                        "<tr>" +
                        "<td>" + response[i].Id + "</td>" +
                        "<td>" + response[i].StudentNumber + "</td>" +
                        "<td>" + response[i].FirstName + "</td>" +
                        "<td>" + response[i].LastName + "</td>" +
                        "<td>" + response[i].Section + "</td>" +
                        "<td>" + response[i].Contact.EmailAddress + "</td>" +
                        "<td>" + response[i].Contact.MobileNumber + "</td>" +
                        "<td>" + response[i].Address.PresentAddress + "</td>" +
                        "<td>" + response[i].Address.PermanentAddress + "</td>" +
                        "</tr>"

                    )
                }
            }
        }
    });

    $("#addBtn").click(function (e) {
        e.preventDefault();
        let item = {
            Id: $("#Id").val(),
            StudentNumber: $("#StudentNumber").val(),
            FirstName: $("#FirstName").val(),
            LastName: $("#LastName").val(),
            Section: $("#Section").val(),
            Contact: {
                EmailAddress: $("#EmailAddress").val(),
                MobileNumber: $("#MobileNumber").val(), },
            Address: {
            PresentAddress: $("#PresentAddress").val(),
            PermanentAddress: $("#PermanentAddress").val(), },
        }
        $.ajax({
            type: "post",
            url: "https://test101.ustangelicum.edu.ph/api/student/add",
            data: item,
            statusCode: {
                200: function () {
                    $(".studentTable").empty();
                    var studentTable = $(".studentTable");
                    $.ajax({
                        type: "get",
                        url: "https://test101.ustangelicum.edu.ph/api/student/get",
                        statusCode: {
                            200: function (response) {

                                for (let i = 0; i < response.length; i++) {
                                    studentTable.append(
                                        "<td>" + response[i].Id + "</td>" +
                                        "<td>" + response[i].StudentNumber + "</td>" +
                                        "<td>" + response[i].FirstName + "</td>" +
                                        "<td>" + response[i].LastName + "</td>" +
                                        "<td>" + response[i].Section + "</td>" +
                                        "<td>" + response[i].Contact.EmailAddress + "</td>" +
                                        "<td>" + response[i].Contact.MobileNumber + "</td>" +
                                        "<td>" + response[i].Address.PresentAddress + "</td>" +
                                        "<td>" + response[i].Address.PermanentAddress + "</td>" +
                                        "</tr>"
                
                                    )
                                }
                            }
                        }
                    });
                }
            }
        });

        $("#Id").val("")
        $("#StudentNumber").val("")
        $("#FirstName").val("")
        $("#LastName").val("")
        $("#Section").val("")
        $("#EmailAddress").val("")
        $("#MobileNumber").val("")
        $("#PresentAddress").val("")
        $("#PermanentAddress").val("")

    });

    $("#getBtn").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "https://test101.ustangelicum.edu.ph/api/student/get/" + $("#Id").val(),
            statusCode: {
                200: function (response) {
                    $("#StudentNumber").val(response.StudentNumber)
                    $("#FirstName").val(response.FirstName)
                    $("#LastName").val(response.LastName)
                    $("#Section").val(response.Section)
                    $("#EmailAddress").val(response.Contact.EmailAddress)
                    $("#MobileNumber").val(response.Contact.MobileNumber)
                    $("#PresentAddress").val(response.Address.PresentAddress)
                    $("#PermanentAddress").val(response.Address.PermanentAddress)

                }
            }
        });
    });

    $("#updateBtn").click(function (e) {
        e.preventDefault();
        let item = {
            Id: $("#Id").val(),
            StudentNumber: $("#StudentNumber").val(),
            FirstName: $("#FirstName").val(),
            LastName: $("#LastName").val(),
            Section: $("#Section").val(),
            Contact: {
                EmailAddress: $("#EmailAddress").val(),
                MobileNumber: $("#MobileNumber").val(), },
            Address: {
            PresentAddress: $("#PresentAddress").val(),
            PermanentAddress: $("#PermanentAddress").val() },

        }
        $.ajax({
            type: "post",
            url: "https://test101.ustangelicum.edu.ph/api/student/update/" + $("#Id").val(),
            data: item,
            statusCode: {
                200: function () {
                    $(".studentTable").empty();
                    var studentTable = $(".studentTable");
                    $.ajax({
                        type: "get",
                        url: "https://test101.ustangelicum.edu.ph/api/student/get",
                        statusCode: {
                            200: function (response) {

                                for (let i = 0; i < response.length; i++) {
                                    studentTable.append(
                                        "<tr>" +
                                        "<td>" + response[i].Id + "</td>" +
                                        "<td>" + response[i].StudentNumber + "</td>" +
                                        "<td>" + response[i].FirstName + "</td>" +
                                        "<td>" + response[i].LastName + "</td>" +
                                        "<td>" + response[i].Section + "</td>" +
                                        "<td>" + response[i].Contact.EmailAddress + "</td>" +
                                        "<td>" + response[i].Contact.MobileNumber + "</td>" +
                                        "<td>" + response[i].Address.PresentAddress + "</td>" +
                                        "<td>" + response[i].Address.PermanentAddress + "</td>" +
                                        "</tr>"
                                    )
                                }
                            }
                        }
                    });
                }
            }
        });
        
        $("#Id").val("")
        $("#StudentNumber").val("")
        $("#FirstName").val("")
        $("#LastName").val("")
        $("#Section").val("")
        $("#EmailAddress").val("")
        $("#MobileNumber").val("")
        $("#PresentAddress").val("")
        $("#PermanentAddress").val("")
    });

    $("#deleteBtn").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "https://test101.ustangelicum.edu.ph/api/student/delete/" + $("#Id").val(),
            statusCode: {
                200: function () {
                    $(".studentTable").empty();
                    var studentTable = $(".studentTable");
                    $.ajax({
                        type: "get",
                        url: "https://test101.ustangelicum.edu.ph/api/student/get", 
                        statusCode: {
                            200: function (response) {

                                for (let i = 0; i < response.length; i++) {
                                    studentTable.append(
                                        "<tr>" +
                                        "<td>" + response[i].Id + "</td>" +
                                        "<td>" + response[i].StudentNumber + "</td>" +
                                        "<td>" + response[i].FirstName + "</td>" +
                                        "<td>" + response[i].LastName + "</td>" +
                                        "<td>" + response[i].Section + "</td>" +
                                        "<td>" + response[i].Contact.EmailAddress + "</td>" +
                                        "<td>" + response[i].Contact.MobileNumber + "</td>" +
                                        "<td>" + response[i].Address.PresentAddress + "</td>" +
                                        "<td>" + response[i].Address.PermanentAddress + "</td>" +
                                        "</tr>"
                                    )
                                }
                            }
                        }
                    });
                }
            }
        });

        $("#Id").val("")
        $("#StudentNumber").val("")
        $("#FirstName").val("")
        $("#LastName").val("")
        $("#Section").val("")
        $("#EmailAddress").val("")
        $("#MobileNumber").val("")
        $("#PresentAddress").val("")
        $("#PermanentAddress").val("")
    });
});