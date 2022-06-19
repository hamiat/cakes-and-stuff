import style from "./footer.module.scss";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p className={style.footerText} id="about">
        Our company values are based and shaped by our values as people. We only
        use ingredients that we would want use ourselves. Only the best for our
        customers, employees and the planet.
      </p>
      <div className={style.footerInfo}>
        <div className={style.newsLetter}>
          <h3>Don't miss out on new treats!</h3>
          <form>
            <label htmlFor="email">
              Enter your email to sign up for our newsletter:
            </label>
            <input type="email" name="email" />
            <button className={style.newsBtn} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={style.visitUs}>
          <h3>Visit our shop</h3>
          <p>
            Cakes and stuff <br></br>
            Sweet Road 12 <br></br>
            12345 Sweetness<br></br>
            Sweet county
          </p>
          <a href="mailto:webmaster@example.com">cakesnstuff@mail.se</a>
        </div>

        <div className={style.footerLinks}>
          <a href="/">About us</a>
          <a href="/">Allergy Information</a>
          <a href="/">Career</a>
          <a href="/">Suggestion Box</a>
          <a href="/">Privacy</a>
        </div>
      </div>
      <small className={style.copyRight}>
        &copy; Copyright {getCurrentYear()}, CakesAndStuffIsNotARealCompany
      </small>
    </footer>
  );
}
