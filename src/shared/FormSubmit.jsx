export default function FormSubmit({ isAllValid }) {
  return (
    <input
      className="btn btn-main btn-send"
      type="submit"
      value="Send"
      disabled={!isAllValid}
    />
  );
}
