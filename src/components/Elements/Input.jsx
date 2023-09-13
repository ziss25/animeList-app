const Input = ({ icon, title, onChange, type = 'text' }) => {
  return (
    <section className="flex flex-col gap-3 mb-3">
      <div className="form-control">
        <div className="flex flex-row items-center">
          <div className="ml-2">{icon}</div>
          <label className="label ml-2">
            <span className="label-text">{title}</span>
          </label>
        </div>
        <input
          type={type} //
          placeholder="Type here"
          className="input input-bordered w-full "
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default Input;
