# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically store all order data from your Shobhaladdu.in website.

## 🎯 What You'll Get

- **Automatic Order Storage** - All orders saved to Google Sheets
- **Customer Database** - Complete customer information
- **Order Tracking** - Order numbers, dates, and status
- **Sales Analytics** - Easy to analyze your business data
- **Export Data** - Download as CSV/Excel anytime

## 📋 Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Create a new spreadsheet"
3. Rename it to "Shobhaladdu Orders" 
4. Rename the first sheet tab to "Orders"
5. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```

## 🔑 Step 2: Get Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the **API Key**

5. Restrict the API Key (Recommended):
   - Click on your API key
   - Under "Application restrictions" → "HTTP referrers"
   - Add your website URL: `https://coderking-99.github.io/*`
   - Under "API restrictions" → Select "Google Sheets API"

## 🔧 Step 3: Configure Your Website

Replace these values in `js/script.js`:

```javascript
const GOOGLE_SHEETS_CONFIG = {
    apiKey: 'YOUR_GOOGLE_API_KEY_HERE',
    spreadsheetId: 'YOUR_SPREADSHEET_ID_HERE',
    range: 'Orders!A:M',
    sheetName: 'Orders'
};
```

## 📊 Step 4: Set Up Sheet Headers

The spreadsheet will have these columns:
- Order Number
- Date
- Time
- Customer Name  
- Email
- Phone
- Address
- City
- Items Ordered
- Total Amount
- Payment Method
- Special Instructions
- Timestamp

## 🔒 Step 5: Make Sheet Public (For Writing)

1. Open your Google Sheet
2. Click "Share" button
3. Change access to "Anyone with the link can edit"
   - Or create a service account for better security

## 🧪 Step 6: Test the Integration

1. Place a test order on your website
2. Check if the order appears in your Google Sheet
3. Verify all data is correctly stored

## 📈 Step 7: Analyze Your Data

Your Google Sheet will automatically:
- ✅ Store every order with complete details
- ✅ Track customer information for follow-ups  
- ✅ Calculate total sales and popular products
- ✅ Export data for accounting/tax purposes

## 🛡️ Security Best Practices

### Option 1: Simple Setup (Less Secure)
- Make sheet public with edit access
- Anyone with link can edit

### Option 2: Secure Setup (Recommended for Business)
- Create Google Service Account
- Use Service Account credentials
- Grant specific sheet access only

## 🔧 Advanced Features You Can Add

1. **Order Status Tracking** - Add status column (Pending, Completed, Delivered)
2. **Inventory Management** - Track stock levels
3. **Customer Analytics** - Repeat customer identification
4. **Sales Dashboard** - Charts and graphs in Google Sheets
5. **Automated Reports** - Weekly/monthly sales summaries

## 🚨 Troubleshooting

### Orders not saving to sheet?
1. Check API key is correct
2. Verify spreadsheet ID
3. Ensure sheet is accessible
4. Check browser console for errors

### Permission errors?
1. Make sure sheet has edit permissions
2. Verify API key restrictions
3. Check if Sheets API is enabled

### Data format issues?
1. Ensure sheet has correct column headers
2. Check date/time formats
3. Verify UTF-8 encoding for special characters

## 💡 Pro Tips

1. **Create Multiple Sheets** in the same document:
   - Orders (main data)
   - Customers (unique customers)
   - Analytics (summaries)

2. **Use Google Sheets Functions**:
   - `=SUM()` for total sales
   - `=COUNTIF()` for order counts
   - `=PIVOT()` for data analysis

3. **Set Up Notifications**:
   - Email alerts when sheet is updated
   - Daily/weekly sales reports

4. **Backup Your Data**:
   - Regular downloads
   - Copy to another sheet
   - Export to Google Drive

Once configured, every order will automatically appear in your Google Sheet, giving you complete business insights and customer data management! 🚀