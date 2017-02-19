package com.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import com.crawler.Crawler;
import com.crawler.CrawlerServiceFactory;
// TODO send type of crawler in request instead of hardcoding it. 
@Path("/main")
@Produces(value = "application/json")
@Consumes(value = "application/json")
public class MainServiceImpl implements MainService {

	@Autowired
	CrawlerServiceFactory crawlerServiceFactory;

	@GET
	@Path("/initiateCrawler/{region}/{query}/{pages}")
	public Response initiateCrawler(@PathParam("region") String region, @PathParam("query") String query, @PathParam("pages") String pages, @PathParam("maxDepth") boolean maxDepth) {

		Crawler crawler = crawlerServiceFactory.retrieveCrawler("craigsList");
		crawler.execute(region, query, pages, maxDepth);

		return crawler.getStatus();
	}

	@POST
	@Path("/initiateStateCrawler")
	public Response initiateStateCrawler(CRequest request) {

		Crawler crawler = crawlerServiceFactory.retrieveCrawler("craigsList");
		
		@SuppressWarnings("unused")
		boolean test = request.isMaxDepth();
		
		crawler.execute(request.getRegions(), request.getSearchQuery(), request.getPages(), request.isMaxDepth());

		return crawler.getStatus();
	}

}
