<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%@ page contentType="text/html;charset=UTF-8" language="java"
         isELIgnored="false" %>
<!DOCTYPE html>
<html lang="ru">
<meta charset="UTF-8">
<link href="./View/css/style.css" rel="stylesheet">

<title>PilacisAnnDamirSamoylova | P33211 | 1024</title>

<body>
<table>


    <th>
        <div style="font-family: 'Monospaced';">Name:</div>
    </th>
    <td>
        <div style="font-family: 'Monospaced';">PilacisAnnDamirSamoylova</div>
    </td>
</table>

<table>
    <th>
        <div style="font-family: 'Monospaced' ;">Group:</div>
    </th>
    <td>
        <div style="font-family: 'Monospaced';">P33211</div>
    </td>
</table>

<table>
    <th>
        <div style="font-family: 'Monospaced' ;">Variant:</div>
    </th>
    <td>
        <div style="font-family: 'Monospaced';">1024</div>
    </td>
</table>


<table>

<%--    <td><img src="./View/res/areas.png" alt="it's not displayed"/></td>--%>
    <td>
        <table id="table" border="1dp">
            <%--inlude non-static table.jsp--%>
            <jsp:include page="table.jsp"/>
        </table>
    </td>
</table>

<table>
    <tr>
        <form id="data">
            <td>
                X:
                <select name="X">
                    <option>-3</option>
                    <option>-2</option>
                    <option>-1</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            <td>
                Y:
                <input name="Y" id="submitY">
            </td>
            <td>
                R:
                <select name="R">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            <td>
        </form>
    </tr>
</table>

<table>
    <tr>
        <button id="submitButton" type="submit" form="data">Send</button>
    </tr>
    <tr>
        <button id="resetButton" type="submit" onclick="dropTable()">Clear</button>
    </tr>
</table>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./View/script/validation.js"></script>
</body>
</html>