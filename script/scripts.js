// Login Functionality
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Define users with their passwords
    const users = {
        "melinda": "melinda",
        "shazaan": "shazaan"
    };

    // Check if username and password match
    if (username in users && users[username] === password) {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('contentSection').classList.remove('hidden');
        document.getElementById('user').innerText = username;
    } else {
        document.getElementById('errorMessage').classList.remove('hidden');
    }
}

// Timer Functionality
// Replace with actual timer functionality as per your requirement

// Photo Gallery Functionality
function uploadPhoto() {
    const fileInput = document.getElementById('photoUpload');
    const photoGallery = document.getElementById('photoGallery');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.classList.add('uploaded-img');
            img.src = e.target.result;
            photoGallery.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
}

// Toggle Section Visibility
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Love Notes Functionality
function addLoveNote() {
    const newLoveNote = document.getElementById('newLoveNote').value.trim();
    if (newLoveNote !== '') {
        const loveNotes = document.getElementById('loveNotes');
        const noteDiv = document.createElement('div');
        noteDiv.textContent = newLoveNote;
        loveNotes.appendChild(noteDiv);
        document.getElementById('newLoveNote').value = '';
    }
}

// Bucket List Functionality
function addBucketItem() {
    const newBucketItem = document.getElementById('newBucketItem').value.trim();
    if (newBucketItem !== '') {
        const bucketList = document.getElementById('bucketList');
        const li = document.createElement('li');
        li.textContent = newBucketItem;
        bucketList.appendChild(li);
        document.getElementById('newBucketItem').value = '';
    }
}

// Favorite Memories Functionality
function addMemory() {
    const newMemory = document.getElementById('newMemory').value.trim();
    if (newMemory !== '') {
        const memories = document.getElementById('memories');
        const memoryDiv = document.createElement('div');
        memoryDiv.textContent = newMemory;
        memories.appendChild(memoryDiv);
        document.getElementById('newMemory').value = '';
    }
}

// Playlists Functionality
function addPlaylist() {
    const newPlaylistName = document.getElementById('newPlaylistName').value.trim();
    const newPlaylistCode = document.getElementById('newPlaylistCode').value.trim();
    if (newPlaylistName !== '' && newPlaylistCode !== '') {
        const playlists = document.getElementById('playlists');
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist-section');
        const button = document.createElement('button');
        button.classList.add('toggle-button');
        button.textContent = newPlaylistName;
        button.onclick = function() {
            toggleSection(`playlist-${newPlaylistName}`);
        };
        playlistDiv.appendChild(button);
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', newPlaylistCode);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '352');
        iframe.setAttribute('frameBorder', '0');
        iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        playlistDiv.appendChild(iframe);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function() {
            playlistDiv.remove();
        };
        playlistDiv.appendChild(removeButton);
        playlists.appendChild(playlistDiv);
        document.getElementById('newPlaylistName').value = '';
        document.getElementById('newPlaylistCode').value = '';
    }
}

// Private Journal Functionality
function addJournalEntry() {
    const newJournalEntry = document.getElementById('newJournalEntry').value.trim();
    if (newJournalEntry !== '') {
        const journal = document.getElementById('journal');
        const entryDiv = document.createElement('div');
        entryDiv.textContent = newJournalEntry;
        journal.appendChild(entryDiv);
        document.getElementById('newJournalEntry').value = '';
    }
}

// Recipes Functionality
function addRecipe() {
    const newRecipe = document.getElementById('newRecipe').value.trim();
    if (newRecipe !== '') {
        const recipes = document.getElementById('recipes');
        const recipeDiv = document.createElement('div');
        recipeDiv.textContent = newRecipe;
        recipes.appendChild(recipeDiv);
        document.getElementById('newRecipe').value = '';
    }
}

// Dream Board Functionality
function addDream() {
    const newDream = document.getElementById('newDream').value.trim();
    if
// Photo Gallery Functionality (Updated with Image Upload and Remove)
function uploadPhoto() {
    const fileInput = document.getElementById('photoUpload');
    const photoGallery = document.getElementById('photoGallery');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.classList.add('uploaded-img');
            img.src = e.target.result;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = function() {
                img.remove();
                removeBtn.remove();
            };

            const div = document.createElement('div');
            div.classList.add('uploaded-item');
            div.appendChild(img);
            div.appendChild(removeBtn);

            photoGallery.appendChild(div);
        }

        reader.readAsDataURL(file);
    }
}

// Remove Photo Functionality (Optional)
// Example of removing uploaded photos if needed
// function removePhoto(photoElement) {
//     photoElement.remove();
// }

// Recipes Functionality (Updated with Remove)
function addRecipe() {
    const newRecipe = document.getElementById('newRecipe').value.trim();
    if (newRecipe !== '') {
        const recipes = document.getElementById('recipes');
        const recipeDiv = document.createElement('div');
        recipeDiv.textContent = newRecipe;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            recipeDiv.remove();
            removeBtn.remove();
        };

        recipeDiv.appendChild(removeBtn);
        recipes.appendChild(recipeDiv);

        document.getElementById('newRecipe').value = '';
    }
}

// Private Journal Functionality (Updated with Remove)
function addJournalEntry() {
    const newJournalEntry = document.getElementById('newJournalEntry').value.trim();
    if (newJournalEntry !== '') {
        const journal = document.getElementById('journal');
        const entryDiv = document.createElement('div');
        entryDiv.textContent = newJournalEntry;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            entryDiv.remove();
            removeBtn.remove();
        };

        entryDiv.appendChild(removeBtn);
        journal.appendChild(entryDiv);

        document.getElementById('newJournalEntry').value = '';
    }
}

// Bucket List Functionality (Updated with Remove and Done)
function addBucketItem() {
    const newBucketItem = document.getElementById('newBucketItem').value.trim();
    if (newBucketItem !== '') {
        const bucketList = document.getElementById('bucketList');
        const li = document.createElement('li');
        li.textContent = newBucketItem;

        // Create buttons for Remove and Mark as Done
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            li.remove();
            removeBtn.remove();
            doneBtn.remove();
        };

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Mark as Done';
        doneBtn.classList.add('done-btn');
        doneBtn.onclick = function() {
            li.classList.toggle('done');
        };

        li.appendChild(removeBtn);
        li.appendChild(doneBtn);
        bucketList.appendChild(li);

        document.getElementById('newBucketItem').value = '';
    }
}

// Shared Calendar Functionality (Placeholder for Future Implementation)
// function addCalendarEvent() { }

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners or initialization code here if needed
});
