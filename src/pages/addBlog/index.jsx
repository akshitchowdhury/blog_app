import classes from "./styles.modules.css";

export default function addNewBlog() {
  return (
    <div className='wrapper'>
      <h1>Add a blog</h1>

      <div className='formWrapper'>
        <input
          name="title"
          placeholder="Enter Blog title"
          id="title"
          type="text"
        />

        <textarea
          name="description"
          id="description"
          placeholder="Enter Blog description"
        />

        <button>Add new Blog</button>
      </div>
    </div>
  );
}
