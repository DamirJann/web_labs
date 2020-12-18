package beans;

import java.io.Serializable;
import java.util.ArrayList;

public class ReportBeans implements Serializable {
    private ArrayList<ReportBean> reportBeans = new ArrayList<>();

    public ReportBeans() { }

    public ArrayList<ReportBean> getReportBeans() {
        return reportBeans;
    }


    public void setReportBeans(ArrayList<ReportBean> reportBean) {
        this.reportBeans = reportBean;
    }



}
