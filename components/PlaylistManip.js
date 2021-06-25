const removeFirstNextSong = (copySongs, setCopySongs, setSongs) => {
  if (copySongs.length == 1) {
    setSongs([]);
    setCopySongs([]);
  } else {  
    const dup = [...copySongs];
    dup.shift();
    setSongs(dup);
    setCopySongs(dup);
  }
};

const addSongToPast = (copySong, copyPast, setCopyPast, setPast) => {
  const dup = [...copyPast, copySong];
  setCopyPast(dup);
  setPast(dup);
};

export const nextSong = (copySong, setCopySong, copySongs, setCopySongs, copyPast, setCopyPast, setSong, setSongs, setPast) => {
  // Change this to a backend request
  console.log(copySongs[0]);
  addSongToPast(copySong, copyPast, setCopyPast, setPast)
  setSong(copySongs[0]);
  setCopySong(copySongs[0]);
  removeFirstNextSong(copySongs, setCopySongs, setSongs);
};

const removeLastPastSong = (copyPast, setCopyPast, setPast) => {
  if (copyPast.length == 1) {
    setPast([]);
    setCopyPast([]);
  } else {
    const dup = [...copyPast];
    dup.pop();
    setPast(dup);
    setCopyPast(dup);
  }
};

const addSongToNext = (copySong, copySongs, setCopySongs, setSongs) => {
  const a = [copySong]
  const dup = a.concat([...copySongs])
  setCopySongs(dup);
  setSongs(dup);
};

export const previousSong = (copySong, setCopySong, copySongs, setCopySongs, copyPast, setCopyPast, setSong, setSongs, setPast) => {
  addSongToNext(copySong, copySongs, setCopySongs, setSongs);
  setSong(copyPast[copyPast.length - 1]);
  setCopySong(copyPast[copyPast.length - 1]);
  removeLastPastSong(copyPast, setCopyPast, setPast);
}