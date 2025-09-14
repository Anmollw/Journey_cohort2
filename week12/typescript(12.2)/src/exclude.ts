type Eventype = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Eventype,"scroll">;

const handlevent = (event: ExcludeEvent) =>{
    console.log(`Handling event : ${event}`);
}

handlevent("click");
// error -> handlevent ('scroll'); 