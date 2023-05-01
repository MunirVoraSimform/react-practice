const BackToTop = () => {
  return (
    <>
      <button
        class="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &uarr;
      </button>
    </>
  );
};

export default BackToTop;
