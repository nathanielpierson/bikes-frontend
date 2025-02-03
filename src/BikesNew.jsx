export function BikesNew() {
  return (
    <div id="bikes-new">
      <h1>New recipe</h1>
      <form>
        <div>
          Brand: <input type="text" />
        </div>
        <div>
          Model: <input type="text" />
        </div>
        <button type="submit">Create bike</button>
      </form>
    </div>
  );
}