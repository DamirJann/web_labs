<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>

<%--TODO брать бин из score, а не через request.getSession()--%>
<%--functions for creating html records of hits--%>
<%!
    public String wrapInTd(ReportBean reportBean){
        return "<td>" + reportBean.getX() + "</td>\n" +
                "<td>" + reportBean.getY() + "</td>\n" +
                "<td>" + reportBean.getR() + "</td>\n" +
                "<td>" + reportBean.getHit() + "</td>\n";
    }

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
    Object userHitsBean =  request.getSession().getAttribute("bean");
    if (userHitsBean != null){
        ArrayList<ReportBean> reportBeans = ((ReportsBean) userHitsBean).getReportBean();
        out.write(wrapInTrTag(reportBeans));
    }
%>`
