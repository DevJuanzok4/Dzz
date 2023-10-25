const routes = [
  {
    path: '/',
    url: './pagar.html'
  },
  
  {
    path: '/scan/',
    componentUrl: './pages/scan.html'
  },

  {
    path: '/list/',
    componentUrl: './pages/list.html'
  },
  
  {
    path: '(.*)',
    url: './pages/404.html'
  }
]
