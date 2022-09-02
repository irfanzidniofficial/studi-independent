// Cpntoh Penggunaan React tanpa JSX

// return(
//     React.DOM.nav({className: 'navigation-dark'},
//     [React.DOM.h1({},
//         React.DOM.a(
//             {href: }, "Instagram"
//         )
//     ),
//     React.DOM.form({},
//         React.DOM.div({className: 'form-group'},[
//             React.DOM.label({for: "search"}, 'Search'),
//             React.DOM.input({type: 'email', className: 'email'})
//         ])

//     ),
//     React.DOM.a({
//         className: 'btn btn-primary',
//         href: 'https://instagram.com'
//     }, 'Get the app')

// ]
// )
// )

// Dengan JSX

return (
  <nav className="navigation">
    <h1>
      <a href="http://instagram.com/irfanzidni11">Instagram</a>
    </h1>

    <form>
        <input type="text" className='form-control' placeholder="search"></input>

    </form>
    <a href="https://instagram.com" className='btn btn-primary'>Get The App</a>
  </nav>
);
