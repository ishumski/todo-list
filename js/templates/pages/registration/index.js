const template = `
<h1>Registration!</h1>
<div class ="registration-form">
    <form>
        <label>Email</label>
        <input name="email">
        <span class="error"></span>
        <label>Password</label>
        <input name="password" type="password">
        <span class="error"></span>

        <label>Repeat Password</label>
        <input name="repeatPassword" type="password">
        <span class="error"></span>

        <button type="submit" class="registration-btn">Register</button>
    </form>
</div>

`

export default template;