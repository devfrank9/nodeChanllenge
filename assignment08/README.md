# 위튜브 온라인 부트캠프 8일차 챌린지

- 오늘의 설계도 에는 파일 에 3가지 기능이 movieController.js있습니다. 오늘 당신의 임무는 그것들을 완성하는 것입니다!

- home 모든 영화를 나열해야 합니다.
- movieDetail 에 기반한 영화를 보여야 한다. :id
- filterMovierating또는 다음을 기반으로 영화를 필터링해야 합니다.
- year가 db.js이미 당신을 위해 만든 파일을, 당신은 그것을 접촉 할 필요가 없습니다.
- db.js수출 다음과 같은 기능 :

1. getMovieById제공된 ID(예: getMovieById(123)) 로 영화를 찾습니다.
2. getMoviesDB에 있는 모든 영화의 배열을 반환합니다(예: getMovies()).
3. getMovieByMinimumRating 등급이 X보다 큰 영화의 배열을 반환합니다(예: getMovieByMinimumRating(5))
4. getMovieByMinimumYearX년 이후에 출판된 영화의 배열을 반환합니다(예: getMovieByMinimumYear(2012)).
5. 또한 movieRouter.js파일 을 완성해야 합니다. 세 개의 URL을 확인 : / /:id및/filter

- views폴더가 비어 있습니다. 부분, 레이아웃 및 믹스인을 만들어 영화를 보여줍니다.
