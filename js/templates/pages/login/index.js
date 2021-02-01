const template = `
<h1>Login</h1>
<div class ="login-form">
    <form>
        <label>Email</label>
        <input name="email">
        <span class="error"></span>
        
        <label>Password</label>
        <input name="password" type="password">
        <span class="error"></span>

        <a href="/registration">Registration</a>
        
        <button type="submit" class="login-btn">Register</button>
    </form>
</div>
`

export default template;