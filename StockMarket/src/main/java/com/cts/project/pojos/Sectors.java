package com.cts.project.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="sectors")
public class Sectors {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Integer id;
	  private String sectorName;
		private String brief;

	  @Override
	public String toString() {
		return "Sectors [id=" + id + ", sectorName=" + sectorName + ", brief=" + brief + "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSectorName() {
		return sectorName;
	}
	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	
	 

}
