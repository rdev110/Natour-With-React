const Layout = () => {
  return (
    <section className="grid-test">
      <div className="row">
        <div className="col-1-of-2">Col 1 Of 2</div>
        <div className="col-1-of-2">Col 1 Of 2</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">Col 1 Of 3</div>
        <div className="col-1-of-3">Col 1 Of 3</div>
        <div className="col-1-of-3">Col 1 Of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">Col 1 Of 3</div>
        <div className="col-2-of-3">Col 2 Of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-1-of-4">Col 1 Of 4</div>
      </div>

      <div className="row">
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-2-of-4">Col 2 Of 4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 Of 4</div>
        <div className="col-3-of-4">Col 3 Of 4</div>
      </div>
    </section>
  );
};

export default Layout;
