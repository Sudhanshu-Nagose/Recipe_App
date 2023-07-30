export function getFoodList() {
  return (dispatch) => {
    dispatch({ type: "FOOD_LOADING" });

    const url =
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca62a38045msh3d37cec407bb798p19054cjsn473d9718c757",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com"
      }
    };

    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          const { results } = response;
          if (results.length > 0) {
            const foodList = [];
            results.forEach((element) => {
              const {
                name,
                description,
                thumbnail_url,
                yields,
                keywords,
                price
              } = element;
              foodList.push({
                name,
                description,
                image: thumbnail_url,
                yields,
                keywords,
                price: price?.consumption_total || price?.total
              });
            });

            dispatch({ type: "FOOD_SUCCESS", data: foodList });
          } else {
            dispatch({ type: "FOOD_FAILED" });
          }
        })
        .catch(() => {
          dispatch({ type: "FOOD_FAILED" });
        });
    } catch (error) {
      dispatch({ type: "FOOD_FAILED" });
    }
  };
}
