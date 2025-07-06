// Label para identificar campos de formulário
export default function LabelForm({ title }: { title: string }) {
  return (
    <label className="text-grayDark text-sm font-black max-sm320:text-[12px] select-none">
      {title}
    </label>
  );
}
