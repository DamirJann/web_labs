<%--this is jsp page, which descibes table. This jsp includes in page.jsp--%>

<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%--get bean from session--%>
<jsp:useBean id= "bean" scope= "session" class="beans.ReportsBean" />


<%--functions for creating html records of hits--%>
<%!

    // use it in the next method
    public String wrapInTd(ReportBean reportBean){
        return "<td>" + reportBean.getX() + "</td>\n" +
                "<td>" + reportBean.getY() + "</td>\n" +
                "<td>" + reportBean.getR() + "</td>\n" +
                "<td>" + reportBean.getHit() + "</td>\n";
    }

    // form table structure from array of ReportBean
    public String wrapInTrTag(ArrayList<ReportBean> reportBeans){
        StringBuilder records = new StringBuilder();
        for (ReportBean report: reportBeans){
            records.append("<tr>")
                    .append(wrapInTd(report))
                   .append("</tr>");
        }
        return records.toString();
    }
%>

<tr>
    <th>X</th>
    <th>Y</th>
    <th>R</th>
    <th>Hit</th>
</tr>

<%--create records using methods upper--%>
<%
    ReportsBean userHitsBean =  bean;
    if (userHitsBean != null){
        ArrayList<ReportBean> reportBeans = userHitsBean.getReportBean();
        out.write(wrapInTrTag(reportBeans));
    }
%>
