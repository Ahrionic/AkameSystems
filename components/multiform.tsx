'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldLabel, FieldGroup } from '@/components/ui/field';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  primaryUses: z.string().max(255, 'Primary uses must be at most 255 characters'),
  gamesPrograms: z.string().max(255, 'Games/Programs must be at most 255 characters'),
  pcSize: z.string().max(255, 'PC size must be at most 255 characters'),
  budgetTextField: z.string().max(255, 'Text Field must be at most 255 characters'),
  customerInformationTextField: z.string().max(255, 'Text Field must be at most 255 characters'),
});

type FormSchema = z.infer<typeof formSchema>;

export const MultiForm = () => {
  const steps = [
    {
      title: 'Customer Goals',
      description: '',
      fields: ['primaryUses', 'gamesPrograms', 'pcSize'],
    },
    {
      title: 'Customer Budget',
      description: '',
      fields: ['budgetTextField'],
    },
    {
      title: 'Customer Information',
      description: '',
      fields: ['customerInformationTextField'],
    },
  ]

  const [currentStep, setCurrentStep] = useState(0);

  const currentForm = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      primaryUses: '',
      gamesPrograms: '',
      pcSize: '',
      budgetTextField: '',
      customerInformationTextField: '',
    },
    mode: 'onChange',
  });

  const handleNextButton = async () => {
    const currentFields = steps[currentStep].fields;

    const isValid = await form.trigger(currentFields as (keyof FormSchema)[]);

    console.log('isValid', isValid);

    if (isValid && !isLastStep) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBackButton = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmitClick = async () => {
    console.log('handleSubmitClick');

    // Validate entire form
    const isFormValid = await form.trigger();
    console.log('isFormValid', isFormValid);
    console.log('form errors', form.formState.errors);
    if (!isFormValid) return;

    // Get values and submit
    const values = form.getValues();
    console.log(values);
    toast.success('Form successfully submitted');
  };

  const renderAllSteps = () => {
    return (
      <>
        {/* Step 0 */}
        <FieldGroup className={cn('flex flex-col justify-between h-full', currentStep === 0 ? '' : 'hidden')}>
          <div>
            <h2 className='text-2xl font-bold'>First, tell us about what your goals are.</h2>
            <p className='text-sm text-gray-500'>This will help us understand your needs.</p>
          </div>
          <Controller
            name='primaryUses'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='primaryUses'>Primary uses for PC</FieldLabel>
                <Input
                  {...field}
                  id='primaryUses'
                  aria-invalid={fieldState.invalid}
                  placeholder=''
                  autoComplete='off'
                  disabled={false}
                />
                <FieldDescription></FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name='gamesPrograms'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='gamesPrograms'>Types of games/programs the customer expects to run</FieldLabel>
                <Input
                  {...field}
                  id='gamesPrograms'
                  aria-invalid={fieldState.invalid}
                  placeholder=''
                  autoComplete='off'
                  disabled={false}
                />
                <FieldDescription></FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name='pcSize'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='pcSize'>PC size</FieldLabel>
                <Input
                  {...field}
                  id='pcSize'
                  aria-invalid={fieldState.invalid}
                  placeholder=''
                  autoComplete='off'
                  disabled={false}
                />
                <FieldDescription></FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Step 1 */}
        <FieldGroup className={currentStep === 1 ? '' : 'hidden'}>
          <Controller
            name='budgetTextField'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='budgetTextField'>Budget Text Field</FieldLabel>
                <Input
                  {...field}
                  id='budgetTextField'
                  aria-invalid={fieldState.invalid}
                  placeholder=''
                  autoComplete='off'
                  disabled={false}
                />
                <FieldDescription></FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Step 2 */}
        <FieldGroup className={currentStep === 2 ? '' : 'hidden'}>
          <Controller
            name='customerInformationTextField'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='customerInformationTextField'>Customer Information Text Field</FieldLabel>
                <Input
                  {...field}
                  id='customerInformationTextField'
                  aria-invalid={fieldState.invalid}
                  placeholder=''
                  autoComplete='off'
                  disabled={false}
                />
                <FieldDescription></FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
      </>
    );
  };

  return (
    <div className='flex flex-col h-full p-4'>
      <form id='multi-form' onSubmit={e => e.preventDefault()} className='flex-1'>
        {renderAllSteps()}
      </form>

      <Field className='justify-between' orientation='vertical'>
        {!isLastStep && (
          <Button type='button' onClick={handleNextButton}>
            Next
            <ChevronRight />
          </Button>
        )}
        {isLastStep && (
          <Button type='button' onClick={handleSubmitClick} className='bg-red-900 text-white'>
            {form.formState.isSubmitting ? <Loader2 className='size-4 animate-spin' /> : 'Submit'}
          </Button>
        )}
        {currentStep > 0 && (
          <Button type='button' variant='secondary' onClick={handleBackButton}>
            <ChevronLeft /> Back
          </Button>
        )}


      </Field>
    </div>
  );
};
