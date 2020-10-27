export default () => {
  return (
    <>
      {/*<p className="h4 text-uppercase text-center">register</p>**/}
      <div className="p-2">
        <fieldset>
          <legend>
            <p className="h5">name</p>
          </legend>
          <input
            type="text"
            value=""
            placeholder="john christoper"
            className="form form-control w-20"
          />
        </fieldset>
      </div>
      <div className="p-2">
        <fieldset>
          <legend>
            <p className="h5">last name</p>
          </legend>
          <input
            type="text"
            value=""
            placeholder="doe"
            className="form form-control w-20"
          />
        </fieldset>
      </div>
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
        <fieldset>
          <legend>
            <p className="h5">re-insert password</p>
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
        <button className="btn btn-danger p-2 m-2">NOPE</button>
      </div>
    </>
  );
};
