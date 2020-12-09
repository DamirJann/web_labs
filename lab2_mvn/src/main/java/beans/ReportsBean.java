package beans;

import java.io.Serializable;
import java.util.ArrayList;

public class ReportsBean implements Serializable {
    private ArrayList<ReportBean> reportBean = new ArrayList<>();

    public ReportsBean() { }

    public ArrayList<ReportBean> getReportBean() {
        return reportBean;
    }

    public void setReportBean(ArrayList<ReportBean> reportBean) {
        this.reportBean = reportBean;
    }



}
