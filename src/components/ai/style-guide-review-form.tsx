'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { reviewStyleGuideAction, type ReviewState } from '@/app/actions';
import { Loader2, FileCheck2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StyleGuideReviewForm = () => {
  const [figmaFileUri, setFigmaFileUri] = useState('');
  const [styleGuide, setStyleGuide] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReviewState | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if(file.size > 4 * 1024 * 1024) {
        setResult({ error: 'File size must be less than 4MB.' });
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUri = loadEvent.target?.result as string;
        setFigmaFileUri(dataUri);
        setFileName(file.name);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!figmaFileUri || !styleGuide) {
      setResult({ error: 'Please provide both a design file and a style guide.' });
      return;
    }
    setLoading(true);
    setResult(null);
    const reviewResult = await reviewStyleGuideAction({ figmaFileUri, styleGuide });
    setResult(reviewResult);
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="figma-file">Upload Design File (PNG, JPG, max 4MB)</Label>
          <Input id="figma-file" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
          {fileName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileCheck2 className="h-4 w-4 text-green-500" />
              <span>{fileName}</span>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="style-guide">Style Guide</Label>
          <Textarea
            id="style-guide"
            placeholder="e.g., Use primary color #673AB7 for buttons. Font for headings is Space Grotesk..."
            value={styleGuide}
            onChange={(e) => {
                setStyleGuide(e.target.value)
                setResult(null);
            }}
            rows={6}
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Review Design'}
        </Button>
      </form>

      {loading && (
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Analyzing your design...</span>
        </div>
      )}

      {result?.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.error}</AlertDescription>
        </Alert>
      )}

      {result?.feedback && (
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">AI Feedback</h3>
            <div className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: result.feedback.replace(/\n/g, '<br />') }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StyleGuideReviewForm;
