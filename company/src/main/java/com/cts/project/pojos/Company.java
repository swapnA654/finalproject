package com.cts.project.pojos;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;



@Entity
@Table(name="company")
public class Company {
	  @Id
	  private String companyName;
	  private String brief;
	  private Integer turnOver;
	  private String ceo;
	  private String boardOfDirectors;
	  private String listedInStockExchanges;
	  private String sector;
	  private String stockCode;
	  @Transient
	  List<Ipos> ipolist;
	  public List<Ipos> getIpolist() {
		return ipolist;
	}


	public void setIpolist(List<Ipos> ipolist) {
		this.ipolist = ipolist;
	}


	@Override
	public String toString() {
		return "Company [companyName=" + companyName + ", brief=" + brief + ", turnOver=" + turnOver + ", ceo=" + ceo
				+ ", boardOfDirectors=" + boardOfDirectors + ", listedInStockExchanges=" + listedInStockExchanges
				+ ", sector=" + sector + ", stockCode=" + stockCode + "]";
	}
	
	
	  public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public Integer getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(Integer turnOver) {
		this.turnOver = turnOver;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}
	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}
	public String getListedInStockExchanges() {
		return listedInStockExchanges;
	}
	public void setListedInStockExchanges(String listedInStockExchanges) {
		this.listedInStockExchanges = listedInStockExchanges;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	
	 
}
