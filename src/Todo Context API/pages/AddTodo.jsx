function AddTodo() {
  function handleSubmit() {}
  return (
    <div>
      <h1>AddTodo</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="h-10 text-xl text-indigo-800"
          type="text"
          placeholder="Add Todo"
        />
        <button className="h-10 w-20 bg-indigo-800 text-white">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
