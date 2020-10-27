export default () => {
  return (
    <>
      {/*<p className="h4 text-uppercase text-center">login</p>**/}
      <div className="p-2">
        <fieldset>
          <legend>
            <p className="h5">email</p>
          </legend>
          <input
            type="text"
            value=""
            placeholder="johndoe@email.com"
            className="form form-control w-20"
          />
        </fieldset>
      </div>
      <div className="p-2">
        <fieldset>
          <legend>
            <p className="h5">password</p>
          </legend>
          <input
            type="new-password"
            value=""
            placeholder="johndoe@@@@1234"
            className="form form-control w-20"
          />
        </fieldset>
      </div>
      <div className="p-2">
        <button className="btn btn-success p-2">OK</button>
      </div>
    </>
  );
};
