# 📊 LinkedIn Job Tracker

A Chrome extension that automatically tracks your LinkedIn job applications and stores them in Google Sheets with built-in analytics.

## ✨ Features

- **🎯 Automatic Tracking** - Automatically captures job details when you click "Apply" on LinkedIn
- **📝 Google Sheets Integration** - Stores all your applications in a Google Sheet
- **🚫 Duplicate Prevention** - Automatically detects and prevents duplicate entries
- **📊 Statistics Dashboard** - View your application stats directly from the extension
- **✅ Visual Feedback** - Get instant alerts when jobs are tracked or duplicates are detected

## 📸 What Gets Tracked

For each job application, the extension captures:
- Job Title
- Company Name
- Location
- Work Mode (Remote, Hybrid, On-site)
- Salary (if available)
- Job URL
- Date Applied

## 🚀 Installation

### 1. Download the Extension

Clone or download this repository:
```bash
git clone [https://github.com/MerubS/Linkedin_Job_Tracker.git]
```

### 2. Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the extension folder

### 3. Set Up Google Sheets Integration

The extension will automatically open a setup page on first install. Follow these steps:

#### Step 1: Create Google Sheet & Apps Script

1. Create a new [Google Sheet](https://sheets.google.com/create)
2. Name it "LinkedIn Job Applications"
3. Go to **Extensions → Apps Script**
4. Delete any default code and paste the provided Apps Script code
5. Save the script

#### Step 2: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Authorize the script (you may need to click "Advanced" and "Go to [Project Name]")
6. Copy the **Web App URL**

#### Step 3: Configure Extension

1. Click the extension icon in Chrome
2. Paste your Web App URL
3. Click **Save Configuration**

You're all set! 🎉

## 📖 How to Use

1. **Browse LinkedIn Jobs** - Go to [LinkedIn Jobs](https://www.linkedin.com/jobs/)
2. **Click on a Job** - View any job posting
3. **Click Apply** - When you click the "Apply" button, the extension automatically tracks it
4. **Get Feedback** - You'll see an alert confirming the job was saved or if it's a duplicate
5. **View Stats** - Click the extension icon to see your application statistics

## 📊 Statistics Dashboard

Click the extension icon to view:
- **Total Applications** - All-time application count
- **This Week** - Applications in the last 7 days
- **This Month** - Applications in the last 30 days
- **Work Mode Breakdown** - Remote, Hybrid, On-site distribution
- **Top Companies** - Companies you've applied to most

## 🗂️ Project Structure

```
linkedin-job-tracker/
├── appScript.js         # Code for Sheets App Script
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── content.js            # LinkedIn page integration
├── popup.html            # Statistics dashboard UI
├── popup.js              # Dashboard logic
├── setup.html            # Setup wizard
└── README.md             # This file
```

## 🔧 Configuration

### Updating Your Google Apps Script

If you need to update your Apps Script deployment:

1. Go to your Apps Script project
2. Click **Deploy → Manage deployments**
3. Click the edit icon (pencil) next to your deployment
4. Change version to **New version**
5. Click **Deploy**

### Reconfiguring the Extension

To change your Google Sheet or webhook URL:

1. Click the extension icon
2. Click **Settings**
3. Enter your new Web App URL
4. Click **Save Configuration**

## 🛠️ Troubleshooting

### Jobs Not Being Tracked

- Check that you've completed the Google Apps Script setup
- Verify the Web App URL is correct in extension settings
- Check the browser console (F12) for error messages
- Make sure you clicked "Apply" on a LinkedIn job posting

### Duplicate Detection Not Working

- Ensure your Google Sheet has the URL column (column 6)
- Redeploy your Apps Script with the latest code
- Check that the Apps Script has proper permissions

### Extension Icon Not Showing Stats

- Verify your Apps Script is deployed correctly
- Check that the Web App URL is configured
- Make sure you have at least one job tracked in your sheet

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## ⚠️ Disclaimer

This extension is for personal use only. It does not automatically submit job applications - it only tracks when you manually click the "Apply" button on LinkedIn. Always follow LinkedIn's Terms of Service.

## 🙏 Acknowledgments

- Built with Chrome Extension Manifest V3
- Powered by Google Apps Script
- Data stored in Google Sheets

---

**Happy Job Hunting!** 🎯

For questions or issues, please open an issue on GitHub.
