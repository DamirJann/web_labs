<%--this is jsp page, which descibes table. This jsp includes in page.jsp--%>

<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%--get bean from session--%>
<jsp:useBean id= "bean" scope= "session" class="beans.ReportsBean" />


<%--&lt;%&ndash;functions for creating html records of hits&ndash;%&gt;--%>
<%--<%!--%>

<%--    // use it in the next method--%>
<%--    public String wrapInTd(ReportBean reportBean){--%>
<%--        return "<td>" + reportBean.getX() + "</td>\n" +--%>
<%--               "<td>" + reportBean.getY() + "</td>\n" +--%>
<%--                "<td>" + reportBean.getR() + "</td>\n" +--%>
<%--                "<td>" + reportBean.getHit() + "</td>\n";--%>
<%--    }--%>

<%--    // form table structure from array of ReportBean--%>
<%--    public String wrapInTrTag(ArrayList<ReportBean> reportBeans){--%>
<%--        StringBuilder records = new StringBuilder();--%>
<%--        for (ReportBean report: reportBeans){--%>
<%--            records.append("<tr>")--%>
<%--                   .append(wrapInTd(report))--%>
<%--                   .append("</tr>");--%>
<%--        }--%>
<%--        return records.toString();--%>
<%--    }--%>
<%--%>--%>

<tr>
    <th>X</th>
    <th>Y</th>
    <th>R</th>
    <th>Hit</th>
</tr>

<%--create records using methods upper--%>
<%
    if (bean != null){
        ArrayList<ReportBean> reportBeans = bean.getReportBean();
        for (int i = 0; i < reportBeans.size(); i++){
%>

<tr>
    <td><%= reportBeans.get(i).getX()%></td>
    <td><%= reportBeans.get(i).getY()%></td>
    <td><%= reportBeans.get(i).getR()%></td>
    <td><%= reportBeans.get(i).getHit()%></td>
</tr>

<%
        }
    }
%>
