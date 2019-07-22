exports.ALLOWED_CONTENT_TYPES = {
  images: {
    size: 1024 * 1024 * 6,
    ext: ['.jpg', '.jpeg', '.png', '.gif'],
  },
  documents: {
    size: 1024 * 1024 * 6,
    ext: ['.doc', '.pdf', '.zip', '.rar', '.xls', '.ppt', '.xlsx', '.docx', '.xls'],
  },
  all: {
    size: 1024 * 1024 * 6,
    ext: ['.jpg', '.jpeg', '.png', '.gif', '.doc', '.pdf', '.xls', '.xlsx', '.ppt', '.zip', '.rar', '.docx'],
  },
}
