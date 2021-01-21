const template = `
    <h1>Pinkie Pie To Do List!</h1>
        <div class="add-form">
            <form>
                <input type="text" name="text" required="">
                <label>Put task for Pinkie Pie</label>
                <button type="submit"><i class="fas fa-plus"></i></button>
            </form>
        </div>

        <div class="todo-list">
            <ol></ol>
        </div>

        <div class="delete-checked-wrapper">
            <button class="delete-checked-btn">Delete Checked</button>
        </div>
`;

export default template;