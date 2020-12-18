<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%@ page contentType="text/html;charset=UTF-8" language="java"
         isELIgnored="false" %>
<!DOCTYPE html>
<html lang="ru">
<meta charset="UTF-8">
<link href="./view/css/style.css" rel="stylesheet">

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
    <td>
        <canvas width="440px" height="440px" id="graph"></canvas>
    </td>
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
            <td id="rValue">
                R:
                <p><input name="R" type="radio" value="1" checked onclick="refreshGraph()">1</p>
                <p><input name="R" type="radio" value="2" onclick="refreshGraph()">2</p>
                <p><input name="R" type="radio" value="3" onclick="refreshGraph()">3</p>
                <p><input name="R" type="radio" value="4" onclick="refreshGraph()">4</p>
                <p><input name="R" type="radio" value="5" onclick="refreshGraph()">5</p>
            <td>
        </form>
    </tr>
</table>

<table>
    <tr>
        <button id="resetButton" type="submit" onclick="dropTable()">Clear</button>
    </tr>
</table>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./view/script/validation.js"></script>
<script src="./view/script/graph.js"></script>
</body>
</html>