var numWays = function(n) {
  function f(n, a = 1, b = 1){
      if(n <= 1) return 1
      return f(n - 1, b, a + b)
  }
  return f(n)
};

numWays(2)