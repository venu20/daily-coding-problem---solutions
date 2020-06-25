// Set root variable to empty object literal
// Split the string with '\n' and assign the array to directories variable
// FOR LOOP:
// Initialize index with 0
// Break the loop when index reaches the length of the directories array
// Increment index by 1
  // Set current_dir to root
  // Find the number of '\t' in the directories[index] and assign to indentation variable
  // Set current_path[indentation] = directories[index]
  // IF indentation-1 > 0
    // Set parent to current_path[indentation-1]
  // FOR LOOP
  // Initialize i with 0
  // Break the loop when it reaches indentation-1
  // Increment i by 1
    // Set directory to current_dir[current_path[i]]
    // IF directory 
      // current_dir = directory  
  // IF directories[index] contains dot
    // Assign current_dir[directories[index]] = True
  // Else 
    // Assign current_dir[directories[index]] = {}

const create_dir_structure = (path) => {
  let root = {};
  let current_path = [];
  let parent;
  let folders_or_files = path.split('\n');
  folders_or_files.forEach((item) => {
    let current_dir = root;
    let indentation = item.split('').filter(k => k === '\t').length;
    current_path[indentation] = item;
    if (indentation - 1 > 0){
      parent = current_path[indentation - 1];
    }
    
    for(let i=0; i < indentation - 1;i++){
      let folder = current_dir[current_path[i]];
      if (folder) {
        current_dir = folder;
      }
    }

    if ('.' in item) {
      current_dir[item] = true;
    } else {
      current_dir[item] = {};
    }
  });
  console.log(root);
}
let path="dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
current_dir_structure(path);
