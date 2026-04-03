const DesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h1 className="text-display">This heading</h1>
      <p className="text-body">This paragraph</p>
      <button className="btn btn-primary">This button</button>
      <button className="btn btn-secondary">This button</button>
      <button className="btn btn-tertiary">This button</button>
      <div className="tag">This tag</div>
      <div className="tag tag-selected">This tag</div>
      <input type="text" className="input" placeholder="This input" />
      <div className="input-group">
        <input type="text" className="input" placeholder="This input" />
      </div>
      <div className="card">This card</div>
      <div className="label">This label</div>
      <div className="divider">This divider</div>
      <a href="#" className="nav-link">
        This nav link
      </a>
      <a href="#" className="nav-link" aria-current="page">
        This nav link
      </a>
      <div className="text-danger">This text</div>
      <div className="border-danger border p-2">This border</div>
    </div>
  );
};

export default DesignSystemPage;
