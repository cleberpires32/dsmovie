package com.devsuperior.dsmovie.dto;

public class ScoreDto {

	private Long movieId;
	private String email;
	private Double score;

	public ScoreDto() {

	}

	public ScoreDto(Long movieId, String email, Double score) {
		this.movieId = movieId;
		this.email = email;
		this.score = score;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

}