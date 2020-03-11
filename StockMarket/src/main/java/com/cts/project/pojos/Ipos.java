package com.cts.project.pojos;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ipos")
public class Ipos {
	  private String companyName;
	  private String stockExchange;
	  private Integer pricePerShare;
	  @Id
	  private Integer id;
	  private String remarks;
	  private Integer totalNumberOfShares;
	  
	  Date opendatetime=new Date();
	  @Override
	public String toString() {
		return "Ipos [companyName=" + companyName + ", stockExchange=" + stockExchange + ", pricePerShare="
				+ pricePerShare + ", id=" + id + ", remarks=" + remarks + ", totalNumberOfShares=" + totalNumberOfShares
				+ ", opendatetime=" + opendatetime + "]";
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public Integer getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(Integer pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getTotalNumberOfShares() {
		return totalNumberOfShares;
	}

	public void setTotalNumberOfShares(Integer totalNumberOfShares) {
		this.totalNumberOfShares = totalNumberOfShares;
	}

	public Date getOpendatetime() {
		return opendatetime;
	}

	public void setOpendatetime(Date opendatetime) {
		this.opendatetime = opendatetime;
	}

	
	 
}
