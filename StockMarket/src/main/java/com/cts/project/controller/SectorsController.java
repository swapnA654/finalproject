package com.cts.project.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.Dao.SectorsRepository;

import com.cts.project.pojos.Sectors;
@RestController

@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/sectors")

public class SectorsController {

 @Autowired
 private SectorsRepository sectorRepository;
 @RequestMapping("/getAllSectors")
 public Iterable<Sectors> getAllSectors()
 {
 return sectorRepository.findAll();
 }
 @PostMapping("/saveSectors")
 public Sectors savesector(@RequestBody Sectors sector)
 {
 System.out.println(sector);
 sectorRepository.save(sector);
 return sector;
 }
 @PutMapping("/updateSectors/{id}")
 public Sectors updatesector(@RequestBody Sectors sector,@PathVariable("id") int id)
 {
 sector.setId(id);
 System.out.println(sector);
 sectorRepository.save(sector);
 return sector;
 }
 @DeleteMapping("/deleteSector/{id}")
 public Boolean deletesector(@PathVariable("id") Integer id)
 {
 System.out.println(id);
 sectorRepository.deleteById(id);
 return true;
 }
 @GetMapping("/findOneInAll3/{id}")
 public Sectors findoneinall(@PathVariable("id") Integer id)
 {
 Optional<Sectors> sector= sectorRepository.findById(id);
 return sector.get();
 }

}

