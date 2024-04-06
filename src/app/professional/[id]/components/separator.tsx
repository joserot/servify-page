export default function Separator() {
  return (
    <div className="relative flex justify-center items-center w-full h-10 my-5">
      <div className="w-full h-[1px] bg-gray-300"></div>
      <span className="absolute bg-background px-2 text-foreground text-sm uppercase">
        O continúa con
      </span>
    </div>
  );
}
